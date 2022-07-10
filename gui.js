const path = require("path");
const fs = require("fs");

const { Connect, _D_HI, _D_LO, _D_NC, Logger, Wire, Pin, Footprint, Circuit, Component, Board, Bus, inv, inva, and, nand, or, bufa, nora, dff, srff, dltch, buf3a, logicexp } = require('./src/core.js');

const ELK = require('elkjs');
const elksvg = require('./extern/elkjs-svg/elkjs-svg.js');

const { createSVGWindow } = require('svgdom')
const window = createSVGWindow()
const document = window.document
const { SVG, registerWindow } = require('@svgdotjs/svg.js')
registerWindow(window, document)

class Schematic_Generator {
  constructor() {
    this.scale = 1.0;

    this.PinSides = {
      L: 'EAST',
      R: 'WEST',
      U: 'SOUTH',
      D: 'NORTH'
    }

    this.graph = {
      id: "root",
      layoutOptions: {
        "elk.algorithm": "layered",
        "spacing.baseValue": "10.0",
				"elk.layered.considerModelOrder.strategy": "NODES_AND_EDGES"
      },
      children: [],
      edges: []
    };
  }

  AddComponent(component) {
    let newNode = {
      id: component.ref,
      ref: component,
      layoutOptions: {
        "nodeSize.constraints": "[PORTS]",
        "nodeLabels.placement": "[H_CENTER, V_CENTER, OUTSIDE]",
        "portLabels.placement": "INSIDE",
        "portConstraints": "FIXED_ORDER"
      },
      ports: [],
      error: false
    };

    //if (component.constructor.lib.svg) {
    let cSVG = new SVG();
//    component.$Symbol().RenderSVG(cSVG);


		cSVG.rect(40, 100).move(-20, -50).fill('none').stroke({ width: 1 });

    let bbox = cSVG.bbox();
    newNode['width'] = bbox.width * this.scale;
    newNode['height'] = bbox.height * this.scale;
    newNode.svg = cSVG;
    newNode.layoutOptions["nodeSize.constraints"] = "[]";
    //}

		let pinKeys = Object.keys(component.pins);
    let middlePinNum = Math.floor(pinKeys.length / 2);
		for (let pIndex = 0; pIndex < pinKeys.length; pIndex++) {
			let pk = pinKeys[pIndex];
			let p = component.pins[pk];

      let pSide = pIndex >= middlePinNum ? "EAST" : "WEST";

			newNode.ports.push({
        id: `${newNode.id}.${p.ref}`,
        labels: [{
          id: `lbl.${newNode.id}.${p.ref}`,
          text: p.ref
        }],
        properties: {
          "port.side": pSide,
          "port.index": p.ref
        },
        width: 5,
        height: 5
      });		
		}

    this.graph.children.push(newNode);

		for (let pIndex = 0; pIndex < pinKeys.length; pIndex++) {
			let pk = pinKeys[pIndex];
			let p = component.pins[pk];

			if (!p.wire) continue;

			let wirePinsComponentOwned = p.wire.pins.filter(p => p.owner);
			if (wirePinsComponentOwned.length <= 1) continue;

			let firstPin = wirePinsComponentOwned[0];
			if (firstPin === p) continue;

			let firstPinID = `${firstPin.owner.ref}.${firstPin.ref}`;
      let thisPinID = `${p.owner.ref}.${p.ref}`;

      let newEdge = {
        id: `e.${firstPinID}.${thisPinID}.0`,
        sources: [ firstPinID ],
        targets: [ thisPinID ],
        error: false
      }

      this.graph.edges.push(newEdge);
		}



  }

  AddNet(net) {
    let orderedPins = net.GetPins().sort((a, b) => b.owner.GetPins().length - a.owner.GetPins().length);

    let firstPin = orderedPins[0];
    for (var pIdx = 1; pIdx < orderedPins.length; pIdx++) {
      let p = orderedPins[pIdx];

      let firstPinID = `${firstPin.owner.GetReference()}.${firstPin.num}`;
      let thisPinID = `${p.owner.GetReference()}.${p.num}`;
      let newEdge = {
        id: `e_${firstPinID}_${thisPinID}_${net.name}`,
        sources: [ firstPinID ],
        targets: [ thisPinID ],
        error: net.render.error
      }

      this.graph.edges.push(newEdge);
    }
  }


  static async Generate(boardRef) {
    let gen = new Schematic_Generator();


		let components = boardRef.GetComponents(true);
		for (let ck in components) {
			components[ck].ref = ck;

			for (let pk in components[ck].pins) {
				components[ck].pins[pk].ref = pk;
				components[ck].pins[pk].owner = components[ck];
			}
		}

		for (let ck in components)
			gen.AddComponent(components[ck]);


    let elk = new ELK();
    return await elk.layout(gen.graph);
  }

  static async Export(b) {
		let elkLayout = await Schematic_Generator.Generate(b);

		let renderer = new elksvg.Renderer();

		// DEBUG injection
		renderer.registerEdges = function(p) {
			(p.edges || []).forEach((e) => {
				e.sources.forEach(source_id => {

					e.targets.forEach(target_id => {
						if (source_id.includes(".")) {
							source_id = source_id.slice(0, source_id.indexOf("."));
						}
						if (!this.isDescendant(source_id, target_id)) {
							source_id = this._parentIds[source_id];
						}
						this._edgeParents[source_id].push(e);
					});
				});
			});
			(p.children || []).forEach(c => this.registerEdges(c));
		}

		let ret = renderer.toSvg(elkLayout);
		let filename = `svg/${b.constructor.name}.svg`;
		fs.writeFileSync(filename, ret);
		Logger.Info('Exported SVG', filename);
  }
}

module.exports = Schematic_Generator;
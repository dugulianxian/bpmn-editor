(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{164:function(e,n,t){e.exports=t(369)},169:function(e,n,t){},363:function(e,n,t){},369:function(e,n,t){"use strict";t.r(n);var a=t(21),s=t.n(a),o=t(153),r=t.n(o),c=(t(169),t(66)),i=t(67),p=t(70),m=t(68),l=t(71),u=t(154),d=t.n(u),h=t(155),b=t.n(h),g=t(156),v=t(95),f=t(0),w=t(4),E={"Send Task":"\u53d1\u9001\u4efb\u52a1","Receive Task":"\u63a5\u6536\u4efb\u52a1","User Task":"\u7528\u6237\u4efb\u52a1","Manual Task":"\u624b\u52a8\u4efb\u52a1","Business Rule Task":"\u4e1a\u52a1\u89c4\u5219\u4efb\u52a1","Service Task":"\u5f52\u6863\u4efb\u52a1","Script Task":"\u811a\u672c\u4efb\u52a1","Call Activity":"\u8c03\u7528\u6d3b\u52a8","Sub Process (collapsed)":"\u5b50\u8fdb\u7a0b\uff08\u6536\u8d77\uff09","Sub Process (expanded)":"\u5b50\u8fdb\u7a0b\uff08\u5c55\u5f00\uff09","Exclusive Gateway":"\u5224\u65ad"};var _={__init__:["translate"],translate:["value",function(e,n){return n=n||{},(e=E[e]||e).replace(/{([^}]+)}/g,function(e,t){return n[t]||"{".concat(t,"}")})}]};function y(e){v.a.call(this,e),this.customElements=[]}t.n(w)()(y,v.a),y.prototype._modules=[].concat(y.prototype._modules,[_]),y.prototype.addCustomShape=function(e){this.customElements.push(e);var n=this.get("canvas"),t=this.get("elementFactory"),a=Object(f.a)({businessObject:e},e),s=t.create("shape",a);return n.addShape(s)},y.prototype.addCustomConnection=function(e){this.customElements.push(e);var n=this.get("canvas"),t=this.get("elementFactory"),a=this.get("elementRegistry"),s=Object(f.a)({businessObject:e},e),o=t.create("connection",Object(f.a)(s,{source:a.get(e.source),target:a.get(e.target)}),a.get(e.source).parent);return n.addConnection(o)},y.prototype.addCustomElements=function(e){if(!Object(f.l)(e))throw new Error("argument must be an array");var n=[],t=[];e.forEach(function(e){"custom:connection"===e.type?t.push(e):n.push(e)}),n.forEach(this.addCustomShape,this),t.forEach(this.addCustomConnection,this)},y.prototype.getCustomElements=function(){return this.customElements};t(363);var M=t(73),P=t.n(M),B=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(t=Object(p.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(s)))).renderDiagram=function(e){t.bpmnModeler.importXML(e,function(e){e?console.log("\u5bfc\u5165\u5931\u8d25"):console.log("\u5bfc\u5165\u6210\u529f")})},t}return Object(l.a)(n,e),Object(i.a)(n,[{key:"componentDidMount",value:function(){this.bpmnModeler=new y({container:"#canvas",propertiesPanel:{parent:"#properties-panel"},additionalModules:[d.a,b.a],moddleExtensions:{camunda:g}}),this.renderDiagram('<?xml version="1.0" encoding="UTF-8"?>\n<bpmn2:definitions\n  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n  xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL"\n  xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"\n  xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"\n  xmlns:di="http://www.omg.org/spec/DD/20100524/DI"\n  xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd"\n  id="sample-diagram"\n  targetNamespace="http://bpmn.io/schema/bpmn"\n>\n  <bpmn2:process id="Process_1" isExecutable="false">\n    <bpmn2:startEvent id="StartEvent_1"/>\n  </bpmn2:process>\n  <bpmndi:BPMNDiagram id="BPMNDiagram_1">\n    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">\n      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">\n        <dc:Bounds height="36.0" width="36.0" x="412.0" y="240.0"/>\n      </bpmndi:BPMNShape>\n    </bpmndi:BPMNPlane>\n  </bpmndi:BPMNDiagram>\n</bpmn2:definitions>')}},{key:"render",value:function(){return s.a.createElement("div",{className:P.a.container},s.a.createElement("div",{className:P.a.canvas,id:"canvas"}),s.a.createElement("div",{className:"properties-panel-parent ".concat(P.a.panel),id:"properties-panel",style:{height:"100%"}}))}}]),n}(a.Component),O=function(e){function n(){return Object(c.a)(this,n),Object(p.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(l.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{style:{height:"100%",overflow:"hidden"}},s.a.createElement(B,null))}}]),n}(a.Component);r.a.render(s.a.createElement(O,null),document.getElementById("root"))},73:function(e,n,t){e.exports={container:"Bpmn_container__2R5A_",canvas:"Bpmn_canvas__2CT5o",panel:"Bpmn_panel__1yfa6"}}},[[164,2,1]]]);
//# sourceMappingURL=main.1204997c.chunk.js.map
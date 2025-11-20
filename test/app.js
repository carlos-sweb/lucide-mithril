import m from "mithril"

import AArrowDown from "../icons/AArrowDown.js"
/*
m.mount(document.body,{
  view:()=>m(AArrowDown,{
    height:150,    
    width:150,
    stroke:"#d4d4d4",
    "stroke-width":2,
    onclick:function(){
      alert("click");
    }
  })
})
*/

const one = document.getElementById("one");
const two = document.getElementById("two");

m.render( one ,
  m(
      AArrowDown,{width:"64",height:"64",stroke:"#d4d4d4"}
))
m.render( two ,
  m(
      AArrowDown,{width:"64",height:"64",stroke:"#d4d4d4"}
))
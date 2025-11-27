import m from "mithril"

import Users from "../icons/Users.js"
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
      Users,{size:64,stroke:"#d4d4d4"}
))
m.render( two ,
  m(
      Users,{size:100,stroke:"#d4d4d4"}
))
class ASTNode {
  type: Number;
  static: Boolean;
  children: Array<ASTNode>;
  staticRoot: Boolean;
  for:Boolean
}
class ASTElement{
 plain:Boolean
 inlineTemplate:Boolean
 tag:String
}
class CodegenState{

}
function markStaticRoots(node: ASTNode, isInFor: boolean) {
  if (node.type === 1) {
    //For a node to qualify as a static root, it should have children that
    //are not just static text. Otherwise the cost of hoisting out will
    //outweigh the benefits and it's better off to just always render it fresh.
    if (
      node.static &&
      node.children.length &&
      !(node.children.length === 1 && node.children[0].type === 3)
    ) {
      node.staticRoot = true
      return;
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (let i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
  }
}

function genElement(el:ASTElement, state:CodegenState) { 
        const data=el.plain?undefined:genData(el, state) 
        const children=el.inlineTemplate?null:genChildren(el, state, true) 
        let code =`_c('${el.tag}'${data?`,data`:''}:'${children?`,${children}`:''})`
        return code
}

function genData(el:ASTElement,state:CodegenState){
  return null
}

function genChildren(el:ASTElement,state:CodegenState,status:CodegenState){
  return null
}
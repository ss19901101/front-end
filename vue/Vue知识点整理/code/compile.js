let str = '<div>n<p>{{name}}</p></div>'

function compileElement() {
    const ncname = '[a-zA-Z_][w-.]*'
    const qnameCapture = `((?:${ncname}:)?${ncname})`
    const startTagOpen = newRegExp(`^<${qnameCapture}`)
        /**
         * 以''
         */
    const startTagOpenRaw = /^<((?:[a-zA-Z_][w-.]*:)?[a-zA-Z_][w-.]*)/
    const startTagClose = /^s*(\?)\//
    let html = `<div></div>`
    let index = 0
    const start = html.match(startTagOpen)
    const match = { tagName: start[1], attrs: [], start: 0 }
    html = html.substring(start[0].length)
    index += start[0].length
    let end, attr
    while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        html = html.substring(attr[0].length)
        index += attr[0].lengthmatch.attrs.push(attr)
    }

    if (end) {
        match.unarySlash = end[1]
        html = html.substring(end[0].length)
        index += end[0].lengthmatch.end = index
    }
    console.log(match)
}

function complie2() {
    let textEnd = html.indexOf('<')
    let text, rest, next
    if (textEnd >= 0) {
        rest = html.slice(textEnd)
            //剩余部分的 HTML 不符合标签的格式那肯定就是文本
            //并且还是以 < 开头的文本
        while (!endTag.test(rest) && !startTagOpen.test(rest) && !comment.test(rest) && !conditionalComment.test(rest)) {
            //< in plain text, be forgiving and treat it as text
            next = rest.indexOf('<', 1)
            if (next < 0) breaktextEnd += next
            rest = html.slice(textEnd)
        }
        text = html.substring(0, textEnd)
        html = html.substring(0, textEnd)
    }
    const children = currentParent.children
        //  text = inPre || text.trim() ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
}

function markStatic(node) {
    for (let i = 0, l = node.children.length; i < l; i++) {
        const child = node.children[i]
        markStatic(child)
        if (!child.static) node.static = false
    }


}
//only preserve whitespace if its not right after a starting tag:preserveWhitespace &&children. length?'':''
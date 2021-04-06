// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
interface RegExpExecArray extends Array<string> {
  index: number;
  input: string;
}

type RegExpExecResultType = RegExpExecArray | null;

export default {
    process(template: string, context: object) {
        try {
            var reg = /\$\{([^\}]+)?\}/g
            var regOut = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g,
                code = 'var z=[];\n',
                cursor = 0

            var add = function(line: string, isJs?: boolean): Function {
                isJs
                    ? (code += line.match(regOut) ? line + '\n' : 'z.push(' + line + ');\n')
                    : (code += line != '' ? 'z.push("' + line.replace(/"/g, '\\"') + '");\n' : '')
                return add
            }
            let result:RegExpExecResultType;
            while ((result = reg.exec(template))!==null) {
                add(template.slice(cursor, result.index))(result[1], true)
                cursor = result.index + result[0].length
            }
            add(template.substr(cursor, template.length - cursor))
            code += 'return z.join("");'

            code = code.replace(/\n/g, "'$n';")
            // console.log(code);
            // console.log(context);
            return new Function(code.replace(/[\r\t\n]/g, ''))
                .apply(context)
                .replace(/'\$n';/g, '\n')
        } catch (e) {
            if (e) {
                console.warn(e)
            } else {
                return 'k-template process fail'
            }
        }
    }
}

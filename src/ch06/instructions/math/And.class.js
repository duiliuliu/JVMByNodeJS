/**
 * @author: HuRuiFeng
 * @file: And.class.js
 * @time: 2019/10/17
 * @desc: 按位与(and)指令
 */

const NoOperandsInstruction = require("../base/Instruction.class").NoOperandsInstruction;

function _and(frame) {
    let stack = frame.operand_stack;
    let v2 = stack.pop_numeric();
    let v1 = stack.pop_numeric();
    let result = v1 & v2;
    stack.push_numeric(result);
}

// int and
class IAND extends NoOperandsInstruction {
    execute(frame) {
        _and(frame);
    }
}

class LAND extends NoOperandsInstruction {
    execute(frame) {
        _and(frame);
    }
}

module.exports = {
    IAND: IAND,
    LAND: LAND
};
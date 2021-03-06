/**
 * @author: HuRuiFeng
 * @file: Float.class.js
 * @time: 2019/10/20 13:35
 * @desc: java.lang.Float类
 */

const struct = require('python-struct');
const register = require("../../Registry.class").register;

/**
 * public static native int floatToRawIntBits(float value);
 (F)I
 * @param frame
 */
function floatToRawIntBits(frame) {
    let value = frame.local_vars.get_numeric(0);
    let bits = struct.unpack('>l', struct.pack('>f', value))[0];
    frame.operand_stack.push_numeric(parseInt(bits));
}

/**
 * public static native float intBitsToFloat(int bits);
 * (I)F
 * @param frame
 */
function intBitsToFloat(frame) {
    let bits = frame.local_vars.get_numeric(0);
    let value = struct.unpack('>f', struct.pack('>l', parseInt(bits)))[0];
    frame.operand_stack.push_float(value);
}

jlFloat = "java/lang/Float";
register(jlFloat, "floatToRawIntBits", "(F)I", floatToRawIntBits);
register(jlFloat, "intBitsToFloat", "(I)F", intBitsToFloat);

module.exports = {
    floatToRawIntBits: floatToRawIntBits,
    intBitsToFloat: intBitsToFloat,
};
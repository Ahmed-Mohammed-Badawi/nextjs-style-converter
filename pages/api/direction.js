import compileCode from "@/helpers/direction-converter.js";

export default function handler(req, res) {
    const { code, isCss } = req.body;
    const result = compileCode(code, isCss);
    res.status(200).json({ result });
}

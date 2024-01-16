const pairs = new Map(Object.entries({
	'(': ')', '[': ']', '{': '}', '<': '>',
}))

const is_valid = (str: string) => {
	const stack = []
	for (const ch of str) {
		for (const [opening, closing] of pairs.entries()) {
			if (ch === opening)
				stack.push(ch)
			else if (ch === closing) {
				const expected_closing = pairs.get(stack.pop())
				if (ch !== expected_closing)
					return false
			}
		}
	}
	return stack.length === 0
}

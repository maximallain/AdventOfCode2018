with open('data_2.txt', 'r') as f :
	lines = f.readlines()


len_lines = len(lines)
len_let = len(list(lines[0]))
for i in range(len_lines):
	e1 = lines.pop()
	for e2 in lines :
		let1 = list(e1)
		let2 = list(e2)
		inc = 0
		j = 0
		res = ""
		while inc < 2 and j < len_let:
			if let1[j] == let2[j]:
				res += let1[j]
			else :
				inc += 1
			j += 1
		if len(res) == len_let-1:
			try :
				final = ""
				for char in res :
					final += char
				print(final)
			except :
				print(res)

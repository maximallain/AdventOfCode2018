with open('data_2.txt', 'r') as f :
	lines = f.readlines()
res_2 = 0
res_3 = 0
for e in lines :
	letters = list(e)
	mem = {}
	two = False
	three = False
	for letter in letters :
		if letter in mem.keys():
			mem[letter] += 1
		else :
			mem[letter] = 1
	if 2 in mem.values():
		res_2 += 1
	if 3 in mem.values():
		res_3 += 1
print('Nb de 2 : ', res_2)
print('Nb de 3 : ', res_3)
print('Mult : ', res_2*res_3)


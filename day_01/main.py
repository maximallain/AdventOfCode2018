# Day 1 - part 1 

with open('./data', 'r') as file:
	lines = file.readlines()
	res = 0
	for e in lines :
		res += int(e)
	print(res)

# Day 1 - part 2

print('/// PART 2 ///')

with open('./data2', 'r') as file :
	lines = file.readlines()
	res = 0
	mem = [res]
	while True :
		for e in lines :
			res += int(e)
			if res in mem :
				print(res)
				break
			mem.append(res)



from tqdm import tqdm
class Claim(object):
	"""docstring for Claim"""
	def __init__(self, claimId, top, left, height, width):
		super(Claim, self).__init__()
		self.claimId = claimId
		self.top = top
		self.left = left
		self.height = height
		self.width = width


	def getAllCases(self):
		res = []
		for i in range(self.top, self.top+self.height):
			for j in range(self.left, self.left+self.width):
				res.append((i,j))
		return res

	def __repr__(self):
         return "ID : {}\ntopxleft : {}x{}\nheightxwidth : {}x{}".format(
			self.claimId, self.top, self.left, self.height, self.width)

	def __str__(self):
		return "ID : {}\ntopxleft : {}x{}\nheightxwidth : {}x{}".format(
			self.claimId, self.top, self.left, self.height, self.width)





with open('data_3.txt', 'r') as f :
	lines = f.readlines()

max_down = 0
max_right = 0
all_Claims = []
for line in tqdm(lines) :
	arg = line.split(' ')
	claimId = arg[0][1:]
	interm = arg[2].split(',')
	top = int(arg[2].split(',')[0])
	left = int(arg[2].split(',')[1][:-1])
	interm2 = [int(e) for e in arg[3].split('x')]
	width = interm2[0]
	height = interm2[1]
	all_Claims.append(Claim(claimId, top, left, width, height))

	# Get the size of the grid
	if (top + height) > max_down :
		max_down = top + height
	if (left + width) > max_right :
		max_right = left + width


#Initialization Matrix
matr = []
for i in range(max_down):
	row = []
	for j in range(max_right):
		row.append(0)
	matr.append(row)

final_res = 0
occ_cases = []

for claim in tqdm(all_Claims) :
	cases = claim.getAllCases()
	"""for case in cases : 
		if case not in occ_cases:
			occ_cases.append(case)
		else :
			final_res += 1 """

	for case in cases:
		try :
			if matr[case[0]][case[1]] == 1 :
				final_res += 1
			matr[case[0]][case[1]] += 1
		except IndexError :
			print(case)

for claim in tqdm(all_Claims) :
	cases = claim.getAllCases()
	isAlone = True
	for case in cases:
		if matr[case[0]][case[1]] != 1:
			isAlone = False
	if isAlone :
		print(claim.claimId)



		
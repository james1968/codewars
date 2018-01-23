def abundant(h):
    nlist = []
    for i in range(1, h+1):
        nlist.append(i)
    ab = []

    def factor(k):
        fctr = []
        num = []
        diff = []
        for j in range(1, k):
            if k % j == 0:
                fctr.append(j)
        if sum(fctr) > k:
            num.append(k)
            diff.append(sum(fctr) - k)
            ab.append(num)
            ab.append(diff)
        else:
            return
    k = 1
    while k <= h:
        factor(k)
        k += 1
    l = len(ab)
    return ab[l-2:]

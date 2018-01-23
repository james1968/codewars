def only_duplicates(string):
    ans = []
    for i in string:
        dup = string.count(i)
        if dup >= 2:
            ans.append(i)
    return ''.join(ans)

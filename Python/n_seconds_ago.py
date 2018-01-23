m datetime import datetime as dt, timedelta
def seconds_ago(s,n):
    f = "%Y-%m-%d %H:%M:%S"
    s_date = dt.strptime(s, f) - timedelta(seconds = n)
    return str(s_date)

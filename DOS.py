import random
import urllib2
#This is a python2 code(2.7)
#It sends a random number between 10**9 and 10**10 to the server and the server computes the nth fibonacci number. 
while(True):
    content = urllib2.urlopen("http://localhost:4100/"+str(random.randint(10**9,10**10))).read()
    print (content)
    

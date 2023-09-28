import os, sys
from time import sleep

if len(sys.argv) < 2:
    print("Usage is pipe <pipe name>")
    sys.exit()

try:
    os.unlink(sys.argv[1])
except Exception as ex:
    pass

try:
    os.mkfifo(sys.argv[1])
except OSError as ex:
    print("Failed to create FIFO", sys.argv[1], ex)
    sys.exit(1)

try:
    fh = open(sys.argv[1], 'r')
except OSError as ex:
    print("Failed to open FIFO: ", ex)
    sys.exit(1)

    print("Listening to ", sys.argv[1], "...")

try:
    while True:
        line = fh.read()
        if len(line) == 0:
            sleep(0.5) #have to do it this way because pipe.flush() doesn't work
        else:
            print(line, flush=True)
except Exception as ex:
	print("Failed read:", ex)

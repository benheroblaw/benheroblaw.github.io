import os

def readfile(file=""):
  """Reads a file."""
  with open(file) as f:
    return f.read()
def writefile(file="", contents=""):
  """Overwrites a file."""
  with open(file, "w") as f:
    f.write(contents)

os.system('clear')
inputFile = input('which file?\n >')
inputFile = inputFile.removeprefix("'")
inputFile = inputFile.removesuffix("'")
outputFile = readfile(os.path.expanduser(inputFile)).splitlines()
outputFile = list(set(outputFile))
outputFile = "\n".join(outputFile)
writefile(inputFile, outputFile)

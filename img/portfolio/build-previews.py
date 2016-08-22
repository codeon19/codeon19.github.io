import glob, os, sys
from PIL import Image

size = (800, 640)
global curNum
curNum = 1

def makePreview(infile, rootfile, ext):
  #  outfile = os.path.splitext(infile)[1] + "preview.jpg"
    outfile = rootfile + "/preview" + ".jpg"
    if infile != outfile:
        try:
            im = Image.open(infile)
            width = im.size[0]
            height = im.size[1]
            if (width/5) > (height/4):
                cropRegion = (0, 0, int(height*1.2), height)
            else:
                cropRegion = (0, 0, width, int(width*0.8))
            imCropped = im.crop(cropRegion)
            imResized = imCropped.resize((800, 640), Image.ANTIALIAS)
            imResized.save(outfile, "JPEG")
        except IOError:
            print("cannot create thumbnail for '%s'" % infile)
    


def rename(dir, pattern, ext):
    global curNum
    for pathAndFilename in glob.iglob(os.path.join(dir, pattern)):
        fname = os.path.join(dir, str(curNum) + ".jpg")
        #make sure it's not trying to rename a preview or a file that already exists
        if not os.path.isfile(fname) \
           and pathAndFilename != (dir + "/preview.jpg"): 
            os.rename(pathAndFilename,fname)
            print(curNum)
        curNum += 1
        


#rename(os.getcwd(), r'*.jpg')
#print(os.getcwd())
for root, dirs, files in os.walk(os.getcwd()):
    if root != os.getcwd():
        curNum = 1
        rename(root, r'*.png', ".png")
        if os.path.isfile(root+'/1.png'):
            makePreview(root+'/1.png', root, ".png")
        rename(root, r'*.jpg', ".jpg")
        if os.path.isfile(root+'/1.jpg'):
            makePreview(root+'/1.jpg', root, ".jpg")
        
    #print(dirs)
    #print(root)
    #print(files)

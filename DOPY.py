# https://www.yehia.online/
import sys
def yehia1(skk): print("\033[91m {}\033[00m" .format(skk)) #red
def yehia2(skk): print("\033[92m {}\033[00m" .format(skk)) #green
def yehia3(skk): print("\033[93m {}\033[00m" .format(skk)) #yellow
def yehia4(skk): print("\033[94m {}\033[00m" .format(skk)) #lightpurple
def yehia5(skk): print("\033[95m {}\033[00m" .format(skk)) #purple
def yehia6(skk): print("\033[96m {}\033[00m" .format(skk)) #cyan
def yehia7(skk): print("\033[97m {}\033[00m" .format(skk)) #lightgray
def yehia8(skk): print("\033[98m {}\033[00m" .format(skk)) #black

yehia3('  ---------------------------------')
print ''' 

'''
yehia2('          .....................')
yehia5('   .                .            .')
yehia6('           Download Files Free ')
print'''         .                   .
                 .                      .
''' 
yehia7('   .            .')
yehia4('          .....................')
yehia3('-------------------------------------')
yehia_URL = raw_input('  Enter URL ADDRESS ')

yehia_name = raw_input('  Enter Name File (name.txt , py , zip , ........ )')

try:
    import urllib.request
    python3 = True
except ImportError:
    import urllib2
    python3 = False

#progress__________Trackback__________________________
def yehia_progress(downloaded,total):
    sys.stdout.write(
        "\r" +
        (len(str(total))-len(str(downloaded)))*" " + str(downloaded) + "/%d"%total +
        " [%3.2f%%]"%(100.0*float(downloaded)/float(total))
    )
    sys.stdout.flush()

def y_e_h_i_a(srcurl, dstfilepath, yehia_download=None, block_size=8192):
    def yehia___HR(response, out_file, file_size):
        if yehia_download!=None: yehia_download(0,file_size)
        if block_size == None:
            buffer = response.read()
            out_file.write(buffer)

            if yehia_download!=None: yehia_download(file_size,file_size)
        else:
            file_size_dl = 0
            while True:
                buffer = response.read(block_size)
                if not buffer: break

                file_size_dl += len(buffer)
                out_file.write(buffer)

                if yehia_download!=None: yehia_download(file_size_dl,file_size)
    with open(dstfilepath,"wb") as out_file:
        if python3:
            with urllib.request.urlopen(srcurl) as response:
                file_size = int(response.getheader("Content-Length"))
                yehia___HR(response,out_file,file_size)
        else:
            response = urllib2.urlopen(srcurl)
            meta = response.info()
            file_size = int(meta.getheaders("Content-Length")[0])
            yehia___HR(response,out_file,file_size)

#import and run Trackback
import traceback
try:
    y_e_h_i_a(
#Link Address Download
        yehia_URL,
#Name the new file in system download
        yehia_name,
        yehia_progress
    )
except:
    traceback.print_exc()
    input()

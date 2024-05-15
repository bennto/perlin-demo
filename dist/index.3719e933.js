!function(t){var o=t.noise={};function r(t,o,r){this.x=t,this.y=o,this.z=r}r.prototype.dot2=function(t,o){return this.x*t+this.y*o},r.prototype.dot3=function(t,o,r){return this.x*t+this.y*o+this.z*r};var n=[new r(1,1,0),new r(-1,1,0),new r(1,-1,0),new r(-1,-1,0),new r(1,0,1),new r(-1,0,1),new r(1,0,-1),new r(-1,0,-1),new r(0,1,1),new r(0,-1,1),new r(0,1,-1),new r(0,-1,-1)],a=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],e=Array(512),i=Array(512);o.seed=function(t){t>0&&t<1&&(t*=65536),(t=Math.floor(t))<256&&(t|=t<<8);for(var o,r=0;r<256;r++)o=1&r?a[r]^255&t:a[r]^t>>8&255,e[r]=e[r+256]=o,i[r]=i[r+256]=n[o%12]},o.seed(0);var d=.5*(Math.sqrt(3)-1),f=(3-Math.sqrt(3))/6,h=1/3,u=1/6;function v(t){return t*t*t*(t*(6*t-15)+10)}o.simplex2=function(t,o){var r,n,a,h,u,v=(t+o)*d,s=Math.floor(t+v),l=Math.floor(o+v),M=(s+l)*f,w=t-s+M,c=o-l+M;w>c?(h=1,u=0):(h=0,u=1);var p=w-h+f,y=c-u+f,x=w-1+2*f,m=c-1+2*f,q=i[(s&=255)+e[l&=255]],z=i[s+h+e[l+u]],A=i[s+1+e[l+1]],b=.5-w*w-c*c;b<0?r=0:(b*=b,r=b*b*q.dot2(w,c));var g=.5-p*p-y*y;g<0?n=0:(g*=g,n=g*g*z.dot2(p,y));var j=.5-x*x-m*m;return j<0?a=0:(j*=j,a=j*j*A.dot2(x,m)),70*(r+n+a)},o.simplex3=function(t,o,r){var n,a,d,f,v,s,l,M,w,c,p=(t+o+r)*h,y=Math.floor(t+p),x=Math.floor(o+p),m=Math.floor(r+p),q=(y+x+m)*u,z=t-y+q,A=o-x+q,b=r-m+q;z>=A?A>=b?(v=1,s=0,l=0,M=1,w=1,c=0):(z>=b?(v=1,s=0,l=0):(v=0,s=0,l=1),M=1,w=0,c=1):A<b?(v=0,s=0,l=1,M=0,w=1,c=1):z<b?(v=0,s=1,l=0,M=0,w=1,c=1):(v=0,s=1,l=0,M=1,w=1,c=0);var g=z-v+u,j=A-s+u,k=b-l+u,B=z-M+2*u,C=A-w+2*u,D=b-c+2*u,E=z-1+3*u,F=A-1+3*u,G=b-1+3*u,H=i[(y&=255)+e[(x&=255)+e[m&=255]]],I=i[y+v+e[x+s+e[m+l]]],J=i[y+M+e[x+w+e[m+c]]],K=i[y+1+e[x+1+e[m+1]]],L=.6-z*z-A*A-b*b;L<0?n=0:(L*=L,n=L*L*H.dot3(z,A,b));var N=.6-g*g-j*j-k*k;N<0?a=0:(N*=N,a=N*N*I.dot3(g,j,k));var O=.6-B*B-C*C-D*D;O<0?d=0:(O*=O,d=O*O*J.dot3(B,C,D));var P=.6-E*E-F*F-G*G;return P<0?f=0:(P*=P,f=P*P*K.dot3(E,F,G)),32*(n+a+d+f)},o.perlin2=function(t,o){var r,n,a,d=Math.floor(t),f=Math.floor(o);t-=d,o-=f;var h=i[(d&=255)+e[f&=255]].dot2(t,o),u=i[d+e[f+1]].dot2(t,o-1),s=i[d+1+e[f]].dot2(t-1,o),l=i[d+1+e[f+1]].dot2(t-1,o-1),M=v(t);return r=(1-M)*h+M*s,n=(1-M)*u+M*l,(1-(a=v(o)))*r+a*n},o.perlin3=function(t,o,r){var n=Math.floor(t),a=Math.floor(o),d=Math.floor(r);t-=n,o-=a,r-=d;var f=i[(n&=255)+e[(a&=255)+e[d&=255]]].dot3(t,o,r),h=i[n+e[a+e[d+1]]].dot3(t,o,r-1),u=i[n+e[a+1+e[d]]].dot3(t,o-1,r),s=i[n+e[a+1+e[d+1]]].dot3(t,o-1,r-1),l=i[n+1+e[a+e[d]]].dot3(t-1,o,r),M=i[n+1+e[a+e[d+1]]].dot3(t-1,o,r-1),w=i[n+1+e[a+1+e[d]]].dot3(t-1,o-1,r),c=i[n+1+e[a+1+e[d+1]]].dot3(t-1,o-1,r-1),p=v(t),y=v(o),x=v(r);return(1-y)*((1-x)*((1-p)*f+p*l)+x*((1-p)*h+p*M))+y*((1-x)*((1-p)*u+p*w)+x*((1-p)*s+p*c))}}(this);
//# sourceMappingURL=index.3719e933.js.map

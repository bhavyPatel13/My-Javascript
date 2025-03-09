// charAt use for in word which num which word in stayfor know
// original string is inmutable string we does not change his value 
// for string value change we make anthor string and change value and run it
// but string name as it is and chande value so this are posible 
 
let str = "ilovejs";
console.log(str.charAt(3));

let st = "ilovejs"
st = st.replace("i", "Bhavy");
console.log(st);


st = st.replace("js", "You");
console.log(st);

const a = st.replace("Bhavy", "I");
console.log(a);
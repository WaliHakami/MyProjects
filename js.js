  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", "DB.xml", true);
  xhttp.send();

function myFunction(xml) {

  var i;
  var numx;
  var nID=[];
  var nCompany=[];
  var nJob=[];
  var nDegree=[];

  var nFor=[];
  var nCondition=[];
  var nStart=[];
  var nEnd=[];
  var nLink = [];

  var nTT = [];

  var xmlDoc = xml.responseXML;
  var table="<tr><th width='5%'>#</th><th>المؤسسة</th><th width='10%'>الوظيفة</th><th width='10%'>الدرجة</th><th width='5%'>الفئة</th><th>المتطلبات</th><th width='10%'>تاريخ البداية</th><th width='10%'>تاريخ النهاية</th><th width='7%'>الحالة</th><th width='5%'>الرابط</th></tr>";
  var tablee="<tr><th width='5%'>#</th><th>المؤسسة</th><th width='10%'>الوظيفة</th><th width='10%'>الدرجة</th><th width='5%'>الفئة</th><th>المتطلبات</th><th width='10%'>تاريخ البداية</th><th width='10%'>تاريخ النهاية</th><th width='7%'>الحالة</th><th width='5%'>الرابط</th></tr>";
  var tableee="<tr><th width='5%'>#</th><th>المؤسسة</th><th width='10%'>الوظيفة</th><th width='10%'>الدرجة</th><th width='5%'>الفئة</th><th>المتطلبات</th><th width='10%'>تاريخ البداية</th><th width='10%'>تاريخ النهاية</th><th width='7%'>الحالة</th><th width='5%'>الرابط</th></tr>";
 var tableeee="<tr><th width='5%'>#</th><th>المؤسسة</th><th width='10%'>الوظيفة</th><th width='10%'>الدرجة</th><th width='5%'>الفئة</th><th>المتطلبات</th><th width='10%'>تاريخ البداية</th><th width='10%'>تاريخ النهاية</th><th width='7%'>الحالة</th><th width='5%'>الرابط</th></tr>";
 
  var x = xmlDoc.getElementsByTagName("DB");
  numx=x.length;

  for (i = 0; i <x.length; i++) { 
    nID[i]= x[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue;
    nCompany[i]= x[i].getElementsByTagName("Company")[0].childNodes[0].nodeValue;
    nJob[i]= x[i].getElementsByTagName("Job")[0].childNodes[0].nodeValue;
    nDegree[i]= x[i].getElementsByTagName("Degree")[0].childNodes[0].nodeValue;
    nFor[i]= x[i].getElementsByTagName("For")[0].childNodes[0].nodeValue;
    nCondition[i]= x[i].getElementsByTagName("Condition")[0].childNodes[0].nodeValue;
    
    nTT[i]= x[i].getElementsByTagName("TT")[0].childNodes[0].nodeValue;
    nLink[i]= x[i].getElementsByTagName("Link")[0].childNodes[0].nodeValue;

   var StartD = x[i].getElementsByTagName("Start")[0].childNodes[0].nodeValue;
   var EndD = x[i].getElementsByTagName("End")[0].childNodes[0].nodeValue;
   var d = new Date(StartD);
   var m = d.getMonth()+1;
   var fdate = d.getFullYear()+ "/"+m +"/"+ d.getDate();

   var daa = new Date();
   var maa = daa.getMonth()+1;
   var today = daa.getFullYear()+ "/"+maa +"/"+ daa.getDate();

   var dd = new Date(EndD);
   var mm = dd.getMonth()+1;
   var edate = dd.getFullYear()+ "/"+mm +"/"+ dd.getDate();
   nStart[i]= fdate;
    nEnd[i]= edate;


    table += "<tr><td>" +
    nID[i] +
    "</td><td>" +
    nCompany[i] +
    "</td><td>" +
    nJob[i] +
    "</td><td>" +
    nDegree[i] +
    "</td><td>" +
    nFor[i] +
    "</td><td>" +
    nCondition[i] +
    "</td><td>" +
    nStart[i] +
    "</td><td>" +
    nEnd[i] +
    "</td>";

    
    var st ;
   if(today > edate)
   {
    st = "<td style='background-color:red; color:#fff;font-weight: bold;'>انتهى</td>";
       table += st+ "<td><a href='#' >مغلق</a></td></tr>";

   }
   else if(today < fdate)
   {
    st = "<td style='background-color:#31708f; color:#fff;font-weight: bold;'>لم يبدا بعد</td>";
       table += st+ "<td><a href='"+nLink[i]+"'  target='_blank'>التفاصيل</a></td></tr>";

   }
   else
   {
    st = "<td style='background-color:#57bc90; color:#fff;font-weight: bold;'>متاح</td>";
       table += st+ "<td><a href='"+nLink[i]+"' target='_blank'>للتقديم</a></td></tr>";

   }


  }

  var a;
  for(a =0;a < x.length  ;a++){
   if(nTT[a]=="المدنية"){

    tablee += "<tr><td>" +
    nID[a] +
    "</td><td>" +
    nCompany[a] +
    "</td><td>" +
    nJob[a] +
    "</td><td>" +
    nDegree[a] +
    "</td><td>" +
    nFor[a] +
    "</td><td>" +
    nCondition[a] +
    "</td><td>" +
    nStart[a] +
    "</td><td>" +
    nEnd[a] +
    "</td>";

    var stt ;
   if(today > nEnd[a])
   {
    stt = "<td style='background-color:red; color:#fff;font-weight: bold;'>انتهى</td>";
       tablee += stt+ "<td><a href='#' >مغلق</a></td></tr>";

   }
   else if(today < nStart[a])
   {
    stt = "<td style='background-color:#31708f; color:#fff;font-weight: bold;'>لم يبدا بعد</td>";
       tablee += stt+ "<td><a href='"+nLink[a]+"'  target='_blank'>التفاصيل</a></td></tr>";

   }
   else
   {
    stt = "<td style='background-color:#57bc90; color:#fff;font-weight: bold;'>متاح</td>";
       tablee += stt+ "<td><a href='"+nLink[a]+"' target='_blank'>للتقديم</a></td></tr>";

   }
   }
   else if(nTT[a]=="العسكرية"){

    tableee += "<tr><td>" +
    nID[a] +
    "</td><td>" +
    nCompany[a] +
    "</td><td>" +
    nJob[a] +
    "</td><td>" +
    nDegree[a] +
    "</td><td>" +
    nFor[a] +
    "</td><td>" +
    nCondition[a] +
    "</td><td>" +
    nStart[a] +
    "</td><td>" +
    nEnd[a] +
    "</td>";

    var sttt ;
   if(today > nEnd[a])
   {
    sttt = "<td style='background-color:red; color:#fff;font-weight: bold;'>انتهى</td>";
       tableee += sttt+ "<td><a href='#' >مغلق</a></td></tr>";

   }
   else if(today < nStart[a])
   {
    sttt = "<td style='background-color:#31708f; color:#fff;font-weight: bold;'>لم يبدا بعد</td>";
       tableee += sttt+ "<td><a href='"+nLink[a]+"'  target='_blank'>التفاصيل</a></td></tr>";

   }
   else
   {
    sttt = "<td style='background-color:#57bc90; color:#fff;font-weight: bold;'>متاح</td>";
       tableee += sttt+ "<td><a href='"+nLink[a]+"' target='_blank'>للتقديم</a></td></tr>";

   }
   }
   else {
   

    tableeee += "<tr><td>" +
    nID[a] +
    "</td><td>" +
    nCompany[a] +
    "</td><td>" +
    nJob[a] +
    "</td><td>" +
    nDegree[a] +
    "</td><td>" +
    nFor[a] +
    "</td><td>" +
    nCondition[a] +
    "</td><td>" +
    nStart[a] +
    "</td><td>" +
    nEnd[a] +
    "</td>";

    var st ;
   if(today > nEnd[a])
   {
    st = "<td style='background-color:red; color:#fff;font-weight: bold;'>انتهى</td>";
       tableeee += st+ "<td><a href='#' >مغلق</a></td></tr>";

   }
   else if(today < nStart[a])
   {
    st = "<td style='background-color:#31708f; color:#fff;font-weight: bold;'>لم يبدا بعد</td>";
       tableeee += st+ "<td><a href='"+nLink[a]+"'  target='_blank'>التفاصيل</a></td></tr>";

   }
   else
   {
    st = "<td style='background-color:#57bc90; color:#fff;font-weight: bold;'>متاح</td>";
       tableeee += st+ "<td><a href='"+nLink[a]+"' target='_blank'>للتقديم</a></td></tr>";

   }

   }
  }
  document.getElementById("demo1").innerHTML = table;
  document.getElementById("nu").innerHTML = "إجمالي عدد الوظائف: "+ numx;
  document.getElementById("demo2").innerHTML = tablee;
  document.getElementById("demo3").innerHTML = tableee;
  document.getElementById("demo4").innerHTML = tableeee;

  

}

	var qntbtn=document.querySelectorAll('.btn')
	var questions=document.querySelectorAll('.qt')
	var questionpage=document.querySelector('.question1')
	var instruct=document.querySelector('.question')
	var startbtn=document.querySelector('.startbtn')
	var topic=document.querySelector('.topic')
	var checkbox1=document.querySelector("[name='check']")
	var sessionstart=document.querySelector('.startexam')
	var maindiv=document.querySelector('.main')
	var demodiv=document.querySelector('.demo')
	var stdname1=document.querySelector('.stdname1')
	var stdname2=document.querySelector('.stdname2')
	var registerform=document.querySelector('.entry')
	var exampaper=document.querySelector('.exam')
	var registerbtn=document.querySelector('#loginbtn')
	var studentname=document.querySelector('.name1')
	var study=document.querySelector('.study')
	var phone=document.querySelector('.phone')
	var image=document.querySelector('.img')
	var sign=document.querySelector('.sign')
	var profilepic=document.querySelector('.profile-img')
	var signpic=document.querySelector('.sign-img')
	var studyname1=document.querySelector('.studyname1')
	var studyname2=document.querySelector('.studyname2')
	var examcmlt=document.querySelector('.examcmlt')
	var rem=900000
	image.onchange=(e)=>{
			if(image.files[0].size<20480 || image.files[0].size>51200)
			{
			document.getElementById("imgerror").innerHTML=`* File size not exceed
			 50kb or not below 20kb`
			}
			else
			{
				document.getElementById("imgerror").innerHTML="File Upload successfully!!"
			}
		}
	sign.onchange=(e)=>{
			if(sign.files[0].size<10240 || sign.files[0].size>20480)
			{
			document.getElementById("signerror").innerHTML=`* File size not exceed 
			20kb or not below 10kb`
			}
			else
			{
				document.getElementById("signerror").innerHTML="File Upload successfully!!"
			}
		}
		studentname.onkeyup=(e)=>{
			if(studentname.value=="")
		{
			document.getElementById("nameerror").innerHTML="* Please enter your name"
		}
		else
		{
			document.getElementById("nameerror").innerHTML=""
		}
		}
		study.onchange=(e)=>{
			if(study.value=="--Select one--")
		{
			document.getElementById("studyerror").innerHTML="* Please Select Highest qualification"
		}
		else
		{
			document.getElementById("studyerror").innerHTML=""
		}
		}
		phone.onkeyup=(e)=>{
			if(isNaN(phone.value) || phone.value=="" || phone.value.length<10)
		{
			document.getElementById('phoneerror').innerHTML="* Please Enter Valid Number"
		}
		else
		{
			document.getElementById('phoneerror').innerHTML=""
		}
		}
	registerbtn.addEventListener("click",()=>{
		if(studentname.value=="")
		{
			document.getElementById("nameerror").innerHTML="* Please enter your name"
		}
		else if(study.value=="--Select one--")
		{
			document.getElementById("studyerror").innerHTML="* Please Select Highest qualification"
		}
		else if(isNaN(phone.value) || phone.value=="" || phone.value.length<10)
		{
			document.getElementById('phoneerror').innerHTML="* Please Enter Valid Number"
		}
		else if(image.value=="")
		{
			document.getElementById("imgerror").innerHTML="* Please upload your image"
		}
		else if(sign.value=="")
		{
			document.getElementById('signerror').innerHTML=`* Please upload your 
			Signature`
		}
		else if(image.files[0].size<20480 || image.files[0].size>51200)
			{
		document.getElementById("imgerror").innerHTML=`* File size not exceed 50kb 
		or not below 20kb`
			}
		else if(sign.files[0].size<10240 || sign.files[0].size>20480)
			{
			document.getElementById("signerror").innerHTML=`* File size not exceed 
			10kb or not below 20kb`
			}
		else
		{
			stdname1.innerHTML=studentname.value.toUpperCase()
			stdname2.innerHTML=studentname.value.toUpperCase()
			studyname1.innerHTML=study.value
			studyname2.innerHTML=study.value
			profilepic.src=URL.createObjectURL(image.files[0])		
			signpic.src=URL.createObjectURL(sign.files[0])
			exampaper.style.display="block"
			registerform.style.display="none"
			document.body.style.background="#FFCDD2"
		}
	})
	qntbtn.forEach(qntbtn=>{
		var a=0
		qntbtn.addEventListener("click",()=>{
			qntbtn.style.background="blue"
			qntbtn.style.color="white"
			a=Number(qntbtn.value)-1
			for(var i=0;i<questions.length;i++)
		{
			if(a<=9)
			{
				topic.innerHTML="HTML"
			}
			else if(a>=10 && a<=19)
			{
				topic.innerHTML="CSS"
			}
			else if(a>19)
			{
				topic.innerHTML="JAVASCRIPT"
			}

			if(a==i)
			{
				questions[i].style.display="block"
				instruct.style.display="none"
			}
			else
			{
				questions[i].style.display="none"
				instruct.style.display="none"
			}
		}
		qntbtn.disabled=true
		})
	})
	for(var i=0;i<qntbtn.length;i++)
	{
		qntbtn[i].disabled=true
	}
		startbtn.disabled=true
	checkbox1.addEventListener("click",()=>{
		if(checkbox1.checked===true)
		{
			startbtn.disabled=false
		}
		else
		{
			startbtn.disabled=true
		}
	})
	startbtn.addEventListener("click",()=>{
		for(var i=0;i<qntbtn.length;i++)
	{
		qntbtn[0].style.background="blue"
		qntbtn[0].style.color="white"
		qntbtn[i].disabled=false
		startbtn.disabled=true
		questions[0].style.display="block"
		instruct.style.display="none"
		qntbtn[0].disabled=true
		topic.innerHTML="HTML"
		questionpage.style.display="block"
	}

	setInterval("count1()",1000)
	})
sessionstart.addEventListener("click",()=>{

	 maindiv.style.display="flex"
	 demodiv.style.display="none"
	
	
})
function count1()
{
	rem=rem-1000
		var s=Math.floor(rem/1000)
		var m=Math.floor(s/60)
		s=s%60
		if(rem<=0)
		{
			s=0
			m=0
			exampaper.style.display="none"
			examcmlt.style.display="flex"
			
		}
	document.getElementById('count').innerHTML=m+":"+s
}
function hai()
{
	close()
}



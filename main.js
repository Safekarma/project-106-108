https://teachablemachine.withgoogle.com/models/QXZtXAlOB/
function startClassification()
{
    naviagator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.coundClassifier('https://teachablemachine.withgoogle.com/models/QXZtXAlOB/');
}
function modelReady()
{
    classifier.classify(gotResults);
}
function gotResults(error,results)
{
    if(error) {
        console.error(error);
    }
    else{
        console.log(results);
        random_numbner_r =Math.floor(Math.random() * 225)+1;
        random_numbner_g =Math.floor(Math.random() * 225)+1;
        random_numbner_b =Math.floor(Math.random() * 225)+1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
        document.getElementById("result_label").style = 'Accuracy - '+ results[0].confindece;
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img=document.getElementById("parrot1");
        img1=document.getElementById("lion2");
        img2=document.getElementById("cat3");
        img3=document.getElementById("dog4");
    
        if(results[0].label == "parrot")
        {
            img.src = 'parrot image.png';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png';
        }
        if(results[0].label == "lion")
        {
            img.src = 'aliens-01.png';
            img1.src = 'lion image.png';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png';
        }
        if(results[0].label == "cat")
        {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'cat image.jpg';
            img3.src = 'aliens-04.png';
        }
        else
        {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = 'dog image.jpg';
        }
       
    
    }
}
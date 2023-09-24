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
function StoppedWorkflowStateAlert(){
    var WFState = '';
    WFState = getFormElement(SearchKeyff38, Text);
    if(WFState == "取下げ"){
        $("#labelStopButton1").hide();$("#labelStopButton2").hide();// ボタンを隠す
    }
}

function showImage(imageId)
{
    document.getElementById(imageId).style.display = 'block';
}
function hideImage(imageId)
{
    document.getElementById(imageId).style.display = 'none';
}

function paddle()
{
    hideImage('placeholder');
    showImage('paddle');
    hideImage('pfd');
    hideImage('seatpad');
    hideImage('guard');
    hideImage('tape');
}

function pfd()
{
    hideImage('placeholder');
    hideImage('paddle');
    showImage('pfd');
    hideImage('seatpad');
    hideImage('guard');
    hideImage('tape');
}

function seatpad()
{
    hideImage('placeholder');
    hideImage('paddle');
    hideImage('pfd');
    showImage('seatpad');
    hideImage('guard');
    hideImage('tape');
}

function guard()
{
    hideImage('placeholder');
    hideImage('paddle');
    hideImage('pfd');
    hideImage('seatpad');
    showImage('guard');
    hideImage('tape');
}

function tape()
{
    hideImage('placeholder');
    hideImage('paddle');
    hideImage('pfd');
    hideImage('seatpad');
    hideImage('guard');
    showImage('tape');
}

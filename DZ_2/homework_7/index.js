let time = 32;
switch(true){
    case (time >= 0 && time < 14):
    console.log("перша четверть");
    break;

    case (time >= 16 && time < 29):
    console.log("друга четверть");
    break;

    case (time >= 30 && time < 44):
    console.log("третя четверть");
    break;

    case (time >= 45 && time < 59):
    console.log("четверта четверть");
    break;
}
import time
from playsound import playsound

class Pomodoro:
    """
    A program that can help you keep track of time

    Instance Variables:
        pomDuration: Duration of pomodoro timer in minutes
    """

    def __init__(self, pomDuration):
        self.pomDuration = pomDuration
        self.secondsInMin = 60

#Ref: https://www.geeksforgeeks.org/how-to-create-a-countdown-timer-using-python/
# Sound Ref: https://freesound.org/people/Rudmer_Rotteveel/sounds/536422/

    def countdown(self, countdown_time):
        while countdown_time:
            mins, secs = divmod(countdown_time, 60)
            timer = '{:02d}:{:02d}'.format(mins, secs)
            print(timer, end="\r")
            time.sleep(1)
            countdown_time -= 1
        print("Time is finished! (: ")
        self.play_beep()
        # seconds = time.time()
        # print("Time in seconds since the epoch:", seconds)
        # local_time = time.ctime(seconds)
        # print("Local time: ", local_time)
    
    # Will start the timer and begin countodwn
    def start_timer(self):
        totalSecs = self.pomDuration * self.secondsInMin
        self.countdown(totalSecs)
    
    def play_beep(self):
        playsound('beep.wav')

def main():
    limit = input("Enter time to countdown from: ")
    pomodoro = Pomodoro(int(limit))
    pomodoro.start_timer()
    
main()
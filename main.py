import time
from playsound import playsound

class Pomodoro:
    """
    A program that can help you keep track of time

    Instance Variables:
        default_time
    """

    def __init__(self, default_time):
        self.default_time = 25

#Ref: https://www.geeksforgeeks.org/how-to-create-a-countdown-timer-using-python/

    def countdown(self, countdown_time):
        while countdown_time:
            mins, secs = divmod(countdown_time, 60)
            timer = '{:02d}:{:02d}'.format(mins, secs)
            print(timer, end="\r")
            time.sleep(1)
            countdown_time -= 1
        print("Time is finished! (: ")
        # seconds = time.time()
        # print("Time in seconds since the epoch:", seconds)
        # local_time = time.ctime(seconds)
        # print("Local time: ", local_time)

def main():
    limit = input("Enter time to countdown from: ")
    pomodoro = Pomodoro(25)
    pomodoro.countdown(int(limit))
main()
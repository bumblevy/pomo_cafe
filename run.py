from flaskblog import app

#only true if we run this flaskblog.py module with python, it will make conditional true and run app.debug
if __name__ == '__main__':
    app.run(debug=True)
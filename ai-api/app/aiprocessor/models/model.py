import sklearn
from os import path
from pickle import load

class Model:
    PATH: str
    model: sklearn

    def __init__(self, filename: str):
        filepath = path.abspath(__file__)
        workdir = path.dirname(filepath)
        self.PATH = path.join(workdir, filename)

        with open(self.PATH, "rb") as file:
            self.model = load(file)
        
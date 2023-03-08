import redis
from rq import Worker, Queue, Connection

listen = ['default']
conn = redis.from_url("redis://redis")

if __name__ == '__main__':
    with Connection(conn):
        worker = Worker(list(map(Queue, listen)))
        worker.work()
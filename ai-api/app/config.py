from os import getenv

class Settings:
    REDIS_HOST: str = getenv('REDIS_HOST','redis://redis')
    REDIS_PORT: int = getenv('REDIS_PORT','6379')
    REDIS_PASSWORD = getenv('REDIS_PASSWORD', None)
    
settings = Settings()
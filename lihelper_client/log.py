import sys
import os
import logging
import logging.handlers

LOG_FILENAME = "./log/monitor.log"
class LOG:
    logger = None
    loglevel = None
    def __init__(self, loglevel= None):
        if not loglevel:
            loglevel = logging.DEBUG
            LOG.loglevel = loglevel
    pass

    @staticmethod 
    def getlogger():
        if not LOG.logger:
            loglevel = LOG.loglevel
            #create logger
            logger = logging.getLogger("monitor.log")
            logger.setLevel(loglevel)

            #create console handler and set level to debug
            ch = logging.StreamHandler()

            # Add the log message handler to the logger
            ch = logging.handlers.RotatingFileHandler(LOG_FILENAME, maxBytes=40960000, backupCount=5)

            ch.setLevel(loglevel)
            #create formatter
            formatter = logging.Formatter("[%(asctime)s-%(filename)s:%(lineno)d-%(thread)d]-[[[%(message)s]]]") 
            #add formatter to ch
            ch.setFormatter(formatter)

            #add ch to logger
            logger.addHandler(ch)
            LOG.logger = logger
 
        return LOG.logger
        pass

    def __del__(self):
        pass

def test():
    #"application" code
    test_log = LOG() 
    logger = test_log.getlogger()
    
    #logger.info("info message")
    #logger.warn("warn message")
    #logger.error("error message")
    #logger.critical("critical message")
    #logger.debug("debug message")
    return 

if __name__ == '__main__':
    test()

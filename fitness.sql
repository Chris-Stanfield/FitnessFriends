CREATE TABLE TheUser(
    UserID VARCHAR(25) NOT NULL, --AKA Username
    UserPassword VARCHAR NOT NULL,
    Token VARCHAR(55),
    profilepic VARCHAR(100),
    PRIMARY KEY (UserID) );

CREATE TABLE Post(
     UserID VARCHAR(25) NOT NULL,
     DateStarts Date NOT NULL,
     StartTime Time NOT NULL,
     EndTime Time NOT NULL,
     Activity VARCHAR(100) NOT NULL,
     TheLocation VARCHAR(100) NOT NULL,
     Gender VARCHAR(20),
     PostDescription VARCHAR(500),
     FOREIGN KEY(UserID) REFERENCES TheUser(UserID),
     PRIMARY KEY (UserId, DateStarts, StartTime)
);

INSERT INTO TheUser VALUES ('Nick', 'Password123', 'token1', 'mypic.jpg');


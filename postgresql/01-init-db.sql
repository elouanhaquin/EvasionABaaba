
-- CREATE TABLE
DROP TABLE IF EXISTS chambres;
CREATE TABLE chambres(
    id SERIAL PRIMARY KEY,
    title VARCHAR NOT NULL,
    color VARCHAR NOT NULL,
    img TEXT NOT NULL,
    button JSONB NOT NULL,
    positive TEXT[] NOT NULL,
    p1 TEXT NOT NULL,
    p2 TEXT NOT NULL
);

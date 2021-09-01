INSERT INTO users
(username, password, designation_id)
VALUES
($1, $2, $3)
RETURNING *;
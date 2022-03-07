SELECT
	c.customer_id, c.first_name, c.last_name,
    a.address
FROM
	sakila.customer AS c
INNER JOIN
	sakila.address AS a ON c.address_id = a.address_id
;
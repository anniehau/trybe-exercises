SELECT
	c.first_name, c.last_name, c.address_id,
    a.district, a.address
FROM
	sakila.customer AS c
INNER JOIN
	sakila.address AS a ON c.address_id = a.address_id
;
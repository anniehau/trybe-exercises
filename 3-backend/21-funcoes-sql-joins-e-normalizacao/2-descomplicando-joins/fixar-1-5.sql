SELECT
	c.first_name, c.last_name, COUNT(a.address) AS `quantidade de endereço`
FROM
	sakila.customer AS c
INNER JOIN
	sakila.address AS a ON a.address_id = c.address_id
GROUP BY
	c.customer_id
ORDER BY
	c.first_name DESC
;
WITH cte_cost AS (
  select "i"."filmId",
       count("i"."filmId") * "f"."replacementCost" as "cost"
   from "inventory" as "i"
   join "films" as "f" using ("filmId")
group by "i"."filmId", "f"."replacementCost"
)
select "f"."title",
       "f"."description",
       "f"."rating",
       sum("p"."amount") - cte_cost."cost" as "totalAmount"
  from "cte_cost"
  join "films" as "f" using ("filmId")
  join "inventory" using ("filmId")
  join "rentals" using ("inventoryId")
  join "payments" as "p" using ("rentalId")
  group by "f"."filmId", cte_cost."cost"
  order by "totalAmount" desc
  limit 5;

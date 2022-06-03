-- Table: public.produits

-- DROP TABLE IF EXISTS public.produits;

CREATE TABLE IF NOT EXISTS public.produits
(
    id integer NOT NULL DEFAULT nextval('produits_id_seq'::regclass),
    name character varying(15) COLLATE pg_catalog."default" NOT NULL,
    description character varying(30) COLLATE pg_catalog."default",
    prix real,
    image character varying(100) COLLATE pg_catalog."default",
    CONSTRAINT produits_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.produits
    OWNER to postgres;
-- Table: public.produits

-- DROP TABLE IF EXISTS public.produits;

CREATE TABLE IF NOT EXISTS public.produits
(
    id integer NOT NULL,
    name character varying(15) COLLATE pg_catalog."default" NOT NULL,
    description character varying(30) COLLATE pg_catalog."default",
    prix real,
    image character varying(100) COLLATE pg_catalog."default",
    CONSTRAINT produits_pkey PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS public.produits
    OWNER to postgres;

-- SEQUENCE: public.produits_id_seq

-- DROP SEQUENCE IF EXISTS public.produits_id_seq;

CREATE SEQUENCE IF NOT EXISTS public.produits_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1
    OWNED BY produits.id;

ALTER SEQUENCE public.produits_id_seq
    OWNER TO postgres;

ALTER TABLE public.produits ALTER COLUMN id SET DEFAULT nextval('produits_id_seq'::regclass);

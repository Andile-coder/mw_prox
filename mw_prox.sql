DROP TABLE vms;
DROP TABLE lxc;

CREATE TABLE vms(
    vmid        VARCHAR(30) NOT NULL UNIQUE,
    name        VARCHAR(120) NOT NULL,
    networks    VARCHAR[],
    storage     VARCHAR[]
);

CREATE TABLE lxc(
    vmid        VARCHAR(30) NOT NULL UNIQUE,
    name        VARCHAR(120) NOT NULL,
    networks    VARCHAR[],
    storage     VARCHAR[]
)
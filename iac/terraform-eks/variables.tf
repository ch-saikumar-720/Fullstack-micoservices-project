variable "region" {}
variable "cluster_name" {}
variable "vpc_cidr" {}
variable "public_subnets" {
  description = "Public subnets configuration"
  type = map(object({
    cidr = string
    az   = string
  }))
}
variable "bastion_ami" {}

variable "instance_types" {
  type = list(string)
}

variable "desired_size" { type = number }
variable "min_size"     { type = number }
variable "max_size"     { type = number }

variable "key_name" {}
variable "bastion_instance_type" {}

variable "rds_engine" {
  type    = string
  default = "mysql"
}

variable "rds_engine_version" {
  type    = string
  default = "8.0"
}

variable "rds_instance_class" {
  type    = string
  default = "db.t3.micro"
}

variable "rds_allocated_storage" {
  type    = number
  default = 20
}

variable "database_name" {
  type = string
}

variable "database_username" {
  type      = string
  sensitive = true
}

variable "database_password" {
  type      = string
  sensitive = true
}
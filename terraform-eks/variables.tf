variable "region" {}
variable "cluster_name" {}
variable "vpc_cidr" {}
variable "public_subnet_cidr" {}
variable "availability_zone" {}
variable "bastion_ami" {}

variable "instance_types" {
  type = list(string)
}

variable "desired_size" { type = number }
variable "min_size"     { type = number }
variable "max_size"     { type = number }

variable "key_name" {}
variable "bastion_instance_type" {}

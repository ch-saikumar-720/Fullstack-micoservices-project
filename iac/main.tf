module "vpc" {
  source = "./modules/vpc"

  vpc_cidr          = var.cidr_block
  subnet_cidr       = var.cidr_block_sub
  availability_zone = var.availability_zone
}

module "aws_instance" {
  source = "./modules/ec2"

  ami           = var.ami
  instance_type = var.instance_type
  subnet_id     = module.vpc.subnet_id
  key_pair      = "microservervices-project"
}
